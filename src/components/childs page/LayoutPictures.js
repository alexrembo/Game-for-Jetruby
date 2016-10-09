import React, { PropTypes, Component } from 'react'

export default class LayoutPictures extends Component {
  static propTypes = {
    pictures: PropTypes.array.isRequired,
    picturesSelected: PropTypes.array.isRequired,
    showPictures: PropTypes.func.isRequired
  }
  render() {
    const { pictures, picturesSelected, showPictures } = this.props
    return <div>
      {
        pictures.map( (item, index) => {
          return <div className='col-xs-5 col-xs-offset-1 col-sm-3 col-md-2' key={index}>
            <div>
              <img alt={item.title}
                id={item.title}
                src={item.hideImage}  
                //pictures will not be active for clicking,
                //if the pictures have already been selected when matching
                //if the number of selected images 2 and they do not have time to hide
                onClick={item.visiblePictureOnClick && picturesSelected.length != 2 ? showPictures : ''}>
              </img>
            </div>
          </div>
        })
      }
    </div>
  }
}