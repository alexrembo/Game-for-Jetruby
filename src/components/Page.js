import React, { PropTypes, Component } from 'react'
import LayoutPictures from './childs page/LayoutPictures'

export default class Page extends Component {
  constructor(props) {
    super(props)
  }
  static propTypes = {
    score: PropTypes.number.isRequired,
    coefficient: PropTypes.number.isRequired,
    pictures: PropTypes.array.isRequired,
    picturesSelected: PropTypes.array.isRequired,
    showPictureSelected: PropTypes.func.isRequired,
    hidePicturesSelected: PropTypes.func.isRequired,
    countScoreGame: PropTypes.func.isRequired,
    getPicturesFromFile: PropTypes.func.isRequired
  }
  showPictures(event) {
    //show the selected picture, parallel in "selectedPictures" memorize the selected picture
    //array of objects(with pictures) is changing so, that the selected pictures changes its appearance
    const { pictures, showPictureSelected, picturesSelected } = this.props
    showPictureSelected(event.target.alt, picturesSelected, pictures);
  }
  componentWillReceiveProps(nextProps) {
    //at each change of parameters, and provided that two selected pictures,
    //calculated the new value of the game score and the function works to hide selected pictures, provided
    //they will be different
    const { hidePicturesSelected, countScoreGame } = this.props
    if (nextProps.picturesSelected.length > 1) {
      setTimeout( () => { 
        hidePicturesSelected(nextProps.picturesSelected, nextProps.pictures);
        countScoreGame(nextProps.score, nextProps.coefficient, nextProps.picturesSelected);
      }, 1000 );
    }
  }
  componentWillMount() {
    //in the primary structure of the page, the data obtained as a array,
    //which contain objects with pictures and the associated names
    const { getPicturesFromFile } = this.props 
    getPicturesFromFile();
  }
  render() {
    const { pictures, picturesSelected, visibleLoadingPage } = this.props
    return <div className='col-xs-8 col-xs-offset-2 col-sm-8 col-sm-offset-1 col-md-10'>
      {
        visibleLoadingPage ? <p className='loading'>Loading...</p>
        : <LayoutPictures 
            pictures={pictures} 
            picturesSelected={picturesSelected} 
          showPictures={::this.showPictures}/>
      } 
    </div>
  }
}