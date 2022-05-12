import { useState } from 'react'
import '../styles/ShortenLink.scss'

export default function ShortenLink() {
  const [valid, setValid] = useState<Boolean>(true)
  const [items, setItems] = useState<any[]>([])

  // function for submitting a link

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault()

    const target = e.target as typeof e.target & {
      input: { value: string }
    }

    const input = target.input.value

    const regexUrl =
      /https?:\/\/(www\.)?[-a-zA-Z0-9@:%.+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&//=]*)/gi

    const id = Math.floor(Math.random() * (100 - 6 + 1)) + 6

    const isDuplicate = items.some((item) => {
      if (item.input === input) {
        return true
      }
      return false
    })

    if (!isDuplicate && input.match(regexUrl)) {
      setValid(true)
      getFetched(input, id)
      target.input.value = ''
    } else {
      setValid(false)
    }
  }

  // get data and return an object

  const getFetched = async (input: string, id: number) => {
    await fetch(`https://api.shrtco.de/v2/shorten?url=${input}`, {
      method: 'POST',
    })
      .then((res) => res.json())
      .then(
        (response) => {
          let copy: any[] = [...items]
          copy = [
            ...copy,
            {
              id,
              input,
              active: false,
              shortUrl: response.result?.full_short_link,
            },
          ]
          setItems(copy)
        },
        (error) => {
          console.log(error)
        }
      )
  }

  // function timer to copy a shortened link

  const handleClick = (item: any) => {
    navigator.clipboard.writeText(item.shortUrl)

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
        {valid ? (
          ''
        ) : (
          <p className="warning">
            Please add a valid link, which is not already in the list.
          </p>
        )}
      </form>
      {items.length >= 1 &&
        items.map((item: any, key: number) => {
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
