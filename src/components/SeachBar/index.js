import { useEffect, useState, useRef } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faCircleXmark,
  faMagnifyingGlass,
  faSpinner,
} from '@fortawesome/free-solid-svg-icons'
import HeadlessTippy from '@tippyjs/react/headless'
import classNames from 'classnames/bind'

import { PopperWrapper } from '~/components/Popper'
import Accounts from '~/components/AccountItems'
import styles from './SearchBar.module.scss'

const cx = classNames.bind(styles)

function SearchBar() {
  const [searchValue, setSearchValue] = useState('')
  const [searchResult, setSearchResult] = useState([])
  const [showResult, setShowResult] = useState(true)
  const [loading, setLoading] = useState(false)

  const refInput = useRef()

  useEffect(() => {
    if (!searchValue.trim()) return
    setLoading(true)
    fetch(
      `https://tiktok.fullstack.edu.vn/api/users/search?q=${encodeURIComponent(
        searchValue,
      )}&type=less`,
    )
      .then((res) => res.json())
      .then((res) => {
        setSearchResult(res.data)
        setLoading(false)
      })
  }, [searchValue])

  function handleInput(e) {
    return setSearchValue(e.target.value)
    // return setTimeout(() => {

    // }, 1000)
  }

  const handleClear = () => {
    setSearchValue('')
    setSearchResult([])
    refInput.current.focus()
  }

  return (
    <HeadlessTippy
      visible={showResult && searchResult.length > 0 && searchValue}
      interactive
      render={(attrs) => (
        <div className={cx('search-result')} tabIndex={-1} {...attrs}>
          <PopperWrapper>
            <h4 className={cx('search-title')}>Accounts</h4>
            {searchResult.map((result) => {
              return <Accounts data={result} key={result.id} />
            })}
          </PopperWrapper>
        </div>
      )}
      onClickOutside={() => setShowResult(false)}
    >
      <div className={cx('search')}>
        <input
          ref={refInput}
          value={searchValue}
          placeholder="Search accounts and videos"
          spellCheck={false}
          onChange={(e) => handleInput(e)}
          onFocus={() => {
            setShowResult(true)
          }}
        />

        {!!searchValue && !loading && (
          <button className={cx('clear')} onClick={handleClear}>
            <FontAwesomeIcon icon={faCircleXmark} />
          </button>
        )}

        {loading && (
          <div className={cx('load')}>
            <FontAwesomeIcon icon={faSpinner} />
          </div>
        )}

        <button className={cx('search-btn')}>
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </button>
      </div>
    </HeadlessTippy>
  )
}

export default SearchBar
