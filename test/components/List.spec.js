import test from 'ava';
import sinon from 'sinon';
import React from 'react';
import { shallow } from 'enzyme';
import { List } from '../../src/components/List';

test('lists images', t => {
    const data = [
    {
        "previewHeight": 99,
        "likes": 8,
        "favorites": 3,
        "tags": "raccoons, cute, curious",
        "webformatHeight": 426,
        "views": 196,
        "webformatWidth": 640,
        "previewWidth": 150,
        "comments": 3,
        "downloads": 94,
        "pageURL": "https://pixabay.com/en/raccoons-cute-curious-cheeky-1685534/",
        "previewURL": "https://pixabay.com/static/uploads/photo/2016/09/21/20/07/raccoons-1685534_150.jpg",
        "webformatURL": "https://pixabay.com/get/e833b90a2df7053ed95c4518b74f459ee47ee6dd04b0154690f0c57aaeeab1_640.jpg",
        "imageWidth": 3543,
        "user_id": 194001,
        "user": "hansbenn",
        "type": "photo",
        "id": 1685534,
        "userImageURL": "https://pixabay.com/static/uploads/user/2016/04/15/10-47-46-845_250x250.jpg",
        "imageHeight": 2362
    },
    {
        "previewHeight": 99,
        "likes": 43,
        "favorites": 69,
        "tags": "dog, animals, friend",
        "webformatHeight": 426,
        "views": 13868,
        "webformatWidth": 640,
        "previewWidth": 150,
        "comments": 4,
        "downloads": 5667,
        "pageURL": "https://pixabay.com/en/dog-animals-friend-animal-624951/",
        "previewURL": "https://pixabay.com/static/uploads/photo/2015/02/05/12/35/dog-624951_150.jpg",
        "webformatURL": "https://pixabay.com/get/ef37b5062df51c2ad65a5854e54f4e91ea73eac818b5164495f4c270a0e9_640.jpg",
        "imageWidth": 3000,
        "user_id": 143740,
        "user": "jarmoluk",
        "type": "photo",
        "id": 624951,
        "userImageURL": "https://pixabay.com/static/uploads/user/2015/04/13/12-35-01-432_250x250.jpg",
        "imageHeight": 2000
    }
    ];
  const wrapper = shallow(
    <List list={data} />
  );
  // there are million ways to test this,
  // but I think counting <Todo> components should be enough
  t.is(wrapper.find('ListItem').length, 2);
});
