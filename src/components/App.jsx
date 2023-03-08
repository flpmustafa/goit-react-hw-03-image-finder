import React, { Component } from 'react';
import axios from 'axios';
import { API_URL, API_KEY, API_PARAMS } from '../utils/api';
import Searchbar from './Searchbar/Searchbar';
import ClearBtn from './Button/ClearButton';
import LoadMoreBtn from './Button/LoadMoreBtn';
import ImageGallery from './ImageGallery/ImageGallery';
import ImageGalleryItem from './ImageGalleryItem/ImageGalleryItem';
import Modal from './Modal/Modal';
import SpinnerLoader from './Loader/Loader';
import css from '../components/App.module.css';
import cssBtn from './Button/LoadMoreBtn.module.css';

export class App extends Component {
  state = {
    hits: [],
    name: '',
    page: 1,
    showModal: false,
    loading: false,
    largeImageURL: '',
    tags: '',
  };

  toggleModal = (imageURL, tag, id) => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
      largeImageURL: imageURL,
      tags: tag,
    }));
  };

  getValue = ({ name, page }) => {
    this.setState({ loading: true });
    try {
      axios
        .get(
          `${API_URL}?key=${API_KEY}&q=${name}&page=${page}&${API_PARAMS}`
        )
        .then(response => {
          if (!response.data.hits.length) {
            alert('No images found!');
          } else if (name === this.state.name) {
            this.setState(state => ({
              hits: [...state.hits, ...response.data.hits],
              name: name,
              page: state.page + 1,
            }));
          } else {
            this.setState(state => ({
              hits: response.data.hits,
              name: name,
              page: state.page + 1,
            }));
          }
        });
    } catch (error) {
      console.error(error.message);
    } finally {
      this.setState({
        loading: false,
      });
    }
  };

  loadMore = () => { 
      this.getValue(this.state) 
  };

  onRefresh = () => {
    this.setState({ 
      hits: [],
      name: '',
      page: 1,
      showModal: false,
      loading: false,
      largeImageURL: '',
      tags: '', })

  }  

  render() {
    const { hits, showModal, loading, largeImageURL, tags } = this.state;
    console.dir(hits.length);

    return (
      <div className={css.App}>
        <Searchbar onSubmitHandler={this.getValue} />

        {loading && <SpinnerLoader />}

        {hits && (
          <ImageGallery>
            <ImageGalleryItem articles={hits} onImage={this.toggleModal} />
          </ImageGallery>
        )}

        {showModal && (
          <Modal onClose={this.toggleModal} url={largeImageURL} alt={tags} />
        )}
          <div className={cssBtn.Button_container}>
          {hits.length === 12 && !loading && (<LoadMoreBtn onButtonClick={() => this.loadMore()} /> )}
          {hits.length > 0 && (<ClearBtn onRefresh={() => this.onRefresh()}/>)}
          </div> 
           
               
      </div>
    );
  }
}
