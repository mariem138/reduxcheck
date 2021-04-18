import React from 'react'
import FilterLink from '../containers/FilterLink'
import { VisibilityFilters } from '../action'

const Footer = () => (
  <div>
    <span>Show: </span>
    <FilterLink filter={VisibilityFilters.SHOW_ALL}>
      All
    </FilterLink>
    <FilterLink filter={VisibilityFilters.SHOW_ACTIVE}>
      notDone
    </FilterLink>
    <FilterLink filter={VisibilityFilters.SHOW_COMPLETED}>
      isDone
    </FilterLink>
  </div>
)

export default Footer