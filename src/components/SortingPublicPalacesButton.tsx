import * as React from 'react'
import Button from '@mui/material/Button'
import axios from 'axios'
import styles from './Sorting.module.css'
import {FormControlLabel, Input, Radio, RadioGroup} from '@mui/material'
import {SharedPalaceType} from '../types'
import {config} from '../config'

interface SortingPublicPalacesButtonProp {
  setPalaces: React.Dispatch<React.SetStateAction<SharedPalaceType[]>>
}
export const SortingPublicPalacesButton = (prop: SortingPublicPalacesButtonProp) => {
  const {setPalaces} = prop
  const [order, setOrder] = React.useState('first_shared_at')
  const [minPins, setMinPins] = React.useState(0)
  const [maxPins, setMaxPins] = React.useState(1)
  const [warning, setWarning] = React.useState(false)
  const handleMinPinsChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    if (Number(e.target.value) >= 0) {
      setMinPins(Number(e.target.value))
    } else {
      setMinPins(0)
    }
  }
  const handleMaxPinsChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    if (Number(e.target.value) > 0) {
      setMaxPins(Number(e.target.value))
    } else {
      setMaxPins(1)
    }
  }

  const handleClick = () => {
    if (maxPins >= minPins && minPins >= 0 && maxPins > 0) {
      axios
        .get(config() + `/api/palaces?sort=${order}&maxpins=${maxPins}&minpins=${minPins}`, {withCredentials: true})
        .then((res) => {
          if (res.data) {
            setPalaces(res.data)
          } else {
            setPalaces(new Array<SharedPalaceType>())
          }
        })
        .catch((err) => console.log(err))
      setWarning(false)
    } else {
      setWarning(true)
    }
  }
  const handleOrderChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setOrder(e.target.value)
  }
  return (
    <div>
      <RadioGroup
        aria-label="sort"
        defaultValue="first_shared_at"
        value={order}
        name="radio-buttons-group"
        onChange={handleOrderChange}>
        <FormControlLabel label={<span>最初の公開日時が新しい順</span>} control={<Radio />} value="first_shared_at" />
        <FormControlLabel label={<span>公開日時が新しい順</span>} control={<Radio />} value="shared_at" />
        <FormControlLabel label={<span>保存したユーザーが多い順</span>} control={<Radio />} value="savedCount" />
      </RadioGroup>
      <span>ピンの数: </span>
      <Input type="number" value={minPins} onChange={handleMinPinsChange} className={styles.pinNumberInput}></Input>
      <span>～</span>
      <Input type="number" value={maxPins} onChange={handleMaxPinsChange} className={styles.pinNumberInput}></Input>
      <br />
      <span className={styles.warning}>{warning ? 'ピンの数指定が不正です' : null}</span>
      <div className={styles.sortingButton}>
        <Button onClick={handleClick}>
          <span>並び替える</span>
        </Button>
      </div>
    </div>
  )
}
