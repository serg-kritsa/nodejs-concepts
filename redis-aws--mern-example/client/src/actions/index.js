import axios from 'axios';
import { FETCH_USER, FETCH_BLOGS, FETCH_BLOG } from './types';

export const fetchUser = () => async dispatch => {
  const res = await axios.get('/api/current_user');

  dispatch({ type: FETCH_USER, payload: res.data });
};

export const handleToken = token => async dispatch => {
  const res = await axios.post('/api/stripe', token);

  dispatch({ type: FETCH_USER, payload: res.data });
};

export const submitBlog = (values, file, history) => async dispatch => {
  // https://s3.console.aws.amazon.com/s3/buckets/some-net-bucket?region=eu-west-1&tab=permissions

  // 1) add rule to CORS section of bucket permission
  // https://docs.aws.amazon.com/AmazonS3/latest/userguide/enabling-cors-examples.html
  // [
  //   {
  //       "AllowedHeaders": [
  //           "*"
  //       ],
  //       "AllowedMethods": [
  //           "PUT"
  //       ],
  //       "AllowedOrigins": [
  //           "http://localhost:3000"
  //       ],
  //       "ExposeHeaders": []
  //   },
  //   {
  //       "AllowedHeaders": [],
  //       "AllowedMethods": [
  //           "GET"
  //       ],
  //       "AllowedOrigins": [
  //           "*"
  //       ],
  //       "ExposeHeaders": []
  //   }
  // ]
  // 2) add bucket policy to everyone access 
  // https://docs.aws.amazon.com/AmazonS3/latest/userguide/example-bucket-policies.html
  // https://awspolicygen.s3.amazonaws.com/policygen.html
  // {
  //     "Version": "2012-10-17",
  //     "Statement": [
  //         {
  //             "Sid": "PublicRead",
  //             "Effect": "Allow",
  //             "Principal": "*",
  //             "Action": [
  //                 "s3:GetObject",
  //                 "s3:GetObjectVersion"
  //             ],
  //             "Resource": [
  //                 "arn:aws:s3:::DOC-EXAMPLE-BUCKET/*"
  //             ]
  //         }
  //     ]
  // }
  //                                                  /*  means to all elements in the bucket   
  
  const uploadConfig = await axios.get('/api/upload');
  // https://www.rfc-editor.org/rfc/rfc2616#section-9.6
  const upload = await axios.put(uploadConfig.data.url, file, {
    headers: {
      'Content-Type': file.type
    }
  });

  const res = await axios.post('/api/blogs', {
    ...values,
    imageUrl: uploadConfig.data.key
  });

  history.push('/blogs');
  dispatch({ type: FETCH_BLOG, payload: res.data });
};

export const fetchBlogs = () => async dispatch => {
  const res = await axios.get('/api/blogs');

  dispatch({ type: FETCH_BLOGS, payload: res.data });
};

export const fetchBlog = id => async dispatch => {
  const res = await axios.get(`/api/blogs/${id}`);

  dispatch({ type: FETCH_BLOG, payload: res.data });
};
