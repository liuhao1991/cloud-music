import React from 'react';

const SearchHistory = (props) => {
  const { inputList } = props;
  const list = inputList.map((v, i) => {
    return <div key={ i }>{ v }</div>
  })
  return (
    <div>
      { list }
    </div>
  )
}


export default SearchHistory;