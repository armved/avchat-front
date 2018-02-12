import { connect } from 'react-redux';
import Spinner from '../../components/Spinner';

const mapStateToProps = state => ({
  loading: state.get('global').get('loading'),
});

export default connect(mapStateToProps)(Spinner);
