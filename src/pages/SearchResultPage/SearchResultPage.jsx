import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { peopleSearchData } from '../../selectors/peopleSelectors/people';
import { planetSearchData } from '../../selectors/planetSelectors/planet';
import { starshipSearchData } from '../../selectors/starshipSelectors/starship';
import SearchResultList from '../../components/SearchResultList/SearchResultList';

const SearchResultPage = ({
  peopleSearchData,
  planetSearchData,
  starshipSearchData
}) => {
  return (
    <SearchResultList
      peopleSearchData={peopleSearchData}
      planetSearchData={planetSearchData}
      starshipSearchData={starshipSearchData}
    />
  );
};

const mapStateToProps = createStructuredSelector({
  peopleSearchData,
  planetSearchData,
  starshipSearchData
});
export default connect(
  mapStateToProps,
  null
)(SearchResultPage);
