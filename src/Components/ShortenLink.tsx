import { useState } from 'react'
import '../styles/ShortenLink.scss'

export default function ShortenLink() {
  const [valid, setValid] = useState(true)
  const [links, setLinks] = useState([])

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault()
    const target = e.target as typeof e.target & {
      input: { value: string }
    }

    const input = target.input.value
    input ? setValid(true) : setValid(false)

    const newLink: any = [...links]
    newLink.push(input)
    setLinks(newLink)
  }

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
        return <div className="new-shortened-link">{link}</div>
      })}
    </div>
  )
}
