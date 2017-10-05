import {Mongo} from 'meteor/mongo';
import {LocalStore} from 'meteor/jalik:ufs-local';

// Declare store collection
const Photos = new Mongo.Collection('photos');

// Declare store
const PhotoStore = new LocalStore({
    collection: Photos,
    name: 'photos',
    path: '/.uploads/photos',
    mode: '0744', // directory permissions
    writeMode: '0744' // file permissions
});

export {Photos, PhotoStore};