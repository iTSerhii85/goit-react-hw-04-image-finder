import axios from 'axios';

async function fetchPictures (text, page) {
    return await axios.get('https://pixabay.com/api/', {
      params: {
          key: '32843857-becb0ae38391759a35788f5eb',
          q: `${text}`,
          page: `${page}`,
          image_type: 'photo',
          orientation: 'horizontal',
          per_page: '12',
      },
   })
  };

  export {fetchPictures};

//   key: '32843857-becb0ae38391759a35788f5eb'