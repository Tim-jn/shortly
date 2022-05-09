import { useState, useEffect } from 'react'
import '../styles/ShortenLink.scss'

export default function ShortenLink() {
  const [valid, setValid] = useState(true)
  const [links, setLinks] = useState([])

  // function for submitting a link

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault()
    const target = e.target as typeof e.target & {
      input: { value: string }
    }

    const regexUrl =
      /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/gi

    const input = target.input.value

    if (input && input.match(regexUrl)) {
      setValid(true)
      const newLink: any = [...links]
      newLink.push(input)
      setLinks(newLink)
    } else {
      setValid(false)
    }
  }

  // function timer to copy a shortened link


  return (
    <div className="shorten-link-content">
      <form className="shorten-link-box" onSubmit={handleSubmit}>
        <input
          className={
            valid ? 'shorten-link-input' : 'shorten-link-input box-warning'
          }
          type="text"
          name="input"
          placeholder="Shorten a link here..."
        />
        <input
          type="submit"
          className="shorten-link-button"
          value="Shorten it !"
        />
        {valid ? '' : <p className="warning">Please add a link</p>}
      </form>
      {links.map((link: string) => {
        return (
          <div className="new-shortened-link">
            <p className="link">{link}</p>
            <div className="shortened-link">
              <button className="copy-button">Copy</button>
            </div>
          </div>
        )
      })}
    </div>
  )
}
