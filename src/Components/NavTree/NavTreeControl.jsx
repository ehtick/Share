import React, {ReactElement} from 'react'
import SvgIcon from '@mui/material/SvgIcon'
import useStore from '../../store/useStore'
import {ControlButtonWithHashState} from '../Buttons'
import {HASH_PREFIX_NAV_TREE} from './hashState'
import TreeIcon from '../../assets/icons/Tree.svg'


/**
 * Button and url hash state to control the NavTree
 *
 * @return {ReactElement}
 */
export default function NavTreeControl() {
  const isNavTreeVisible = useStore((state) => state.isNavTreeVisible)
  const setIsNavTreeVisible = useStore((state) => state.setIsNavTreeVisible)
  return (
    <ControlButtonWithHashState
      title='Navigation'
      icon={<SvgIcon><TreeIcon className='icon-share'/></SvgIcon>}
      isDialogDisplayed={isNavTreeVisible}
      setIsDialogDisplayed={setIsNavTreeVisible}
      hashPrefix={HASH_PREFIX_NAV_TREE}
      placement='right'
    />
  )
}
