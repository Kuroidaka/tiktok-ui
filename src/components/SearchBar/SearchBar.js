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
import { useDebounce } from '~/components/Hooks'
import SearchInput from './Input'
// import * as request from '~/Utils/Request'
import * as apiService from '~/services/SearchService'

const cx = classNames.bind(styles)

function SearchBar() {
  const [searchValue, setSearchValue] = useState('')
  const [searchResult, setSearchResult] = useState([])
  const [showResult, setShowResult] = useState(true)
  const [loading, setLoading] = useState(false)

  const refInput = useRef()
  const deBounce = useDebounce(searchValue, 500)

  useEffect(() => {
    if (!deBounce.trim()) return

    setLoading(true)

    // GET API

    const fetchApi = async () => {
      const result = await apiService.search(deBounce)
      setSearchResult(result)
      setLoading(false)
    }

    fetchApi()
    // console.log(res);
  }, [deBounce])

  const handleInput = (e) => {
    const value = e.target.value
    if(!value.startsWith(' '))
    setSearchValue(value)
  }

  const handleClear = () => {
    setSearchValue('')
    setSearchResult([])
    refInput.current.focus()
  }

  const handleClickSearchBtn = (e) => {
    return e.preventDefault();
  }

  return (
    // fix warning in console
    <div>
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
          <SearchInput
            ref={refInput}
            value={searchValue}
            placeholder="Search accounts and videos"
            onInput={(e) => handleInput(e)}
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
  
          <button className={cx('search-btn')} onMouseDown={e => handleClickSearchBtn(e)}>
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </button>
        </div>
      </HeadlessTippy>
    </div>
  )
}

export default SearchBar
