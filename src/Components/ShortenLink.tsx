import { useState, useEffect } from 'react'
import '../styles/ShortenLink.scss'

export default function ShortenLink() {
  const [valid, setValid] = useState<Boolean>(true)
  const [items, setItems] = useState<any[]>([])
  const [linkToShorten, setLinkToShorten] = useState('')
  const [shortenedLink, setShortenedLink] = useState('')
  const [error, setError] = useState()

  // function for submitting a link

  const handleSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault()
    const target = e.target as typeof e.target & {
      input: { value: string }
    }

    const regexUrl =
      /https?:\/\/(www\.)?[-a-zA-Z0-9@:%.+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&//=]*)/gi

    const input = target.input.value
    setLinkToShorten(input)
    const id = Math.floor(Math.random() * (100 - 6 + 1)) + 6

    if (input && input.match(regexUrl)) {
      setValid(true)
      let copy: any[] = [...items]
      copy = [...copy, { id, input, active: false, shortUrl: shortenedLink }]
      setItems(copy)
    } else {
      setValid(false)
    }
  }

  // function timer to copy a shortened link

  const handleClick = (item: any) => {
    navigator.clipboard.writeText(item.input)

    let mapped = items.map((i) => {
      return i.id === parseInt(item.id) ? { ...i, active: true } : { ...i }
    })

    setItems(mapped)
  }

  const removeHandleClick = () => {
    let mapped = items.map((i) => {
      return { ...i, active: false }
    })

    setItems(mapped)
  }

  // get data

  useEffect(() => {
    fetch(`https://api.shrtco.de/v2/shorten?url=${linkToShorten}`, {
      method: 'POST',
    })
      .then((res) => res.json())
      .then(
        (response) => {
          setShortenedLink(response.result?.full_short_link)
        },
        (error) => {
          setError(error)
        }
      )
  }, [linkToShorten])

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
      {items.map((item: any, key: number) => {
        return (
          <div key={key} className="new-shortened-link">
            <p className="link">{item.input}</p>
            <div className="shortened-link">
              <a
                href={item.shortUrl}
                target="_blank"
                rel="noreferrer"
                className="shorten-link"
              >
                {item.shortUrl}
              </a>
              <button
                className={
                  !item.active
                    ? 'copy-button'
                    : 'copy-button copy-button-active'
                }
                onClick={() => {
                  handleClick(item)
                  setTimeout(() => removeHandleClick(), 1000)
                }}
              >
                {!item.active ? 'Copy' : 'Copied!'}
              </button>
            </div>
          </div>
        )
      })}
    </div>
  )
}
