import SearchInput from '../common/SearchInput';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { inputSearch, commitSearch, focusInput, searchSongs, searchMultimatch, searchRecommend } from '../../actions';

const mapStateToProps = state => {
  return {
    search: state.search
  }
}

const mapDispatchToProps = dispatch => {
  return {
    inputSearch: bindActionCreators(inputSearch, dispatch),
    commitSearch: bindActionCreators(commitSearch, dispatch),
    focusInput: bindActionCreators(focusInput, dispatch),
    searchSongs: bindActionCreators(searchSongs, dispatch),
    searchMultimatch: bindActionCreators(searchMultimatch, dispatch),
    searchRecommend: bindActionCreators(searchRecommend, dispatch),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchInput);