
import { connect } from 'react-redux';
import { loadRegionData } from '../actions/mapActions';

// MapStateToProps function to map state to component props
const mapStateToProps = (state) => ({
  selectedRegion: state.map.selectedRegion,
});

// MapDispatchToProps object to map actions to component props
const mapDispatchToProps = {
  loadRegionData,
};

// Connect the Map component to the Redux store
const ConnectedMap = connect(mapStateToProps, mapDispatchToProps)(Map);

export default ConnectedMap;
