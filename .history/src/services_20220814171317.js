import {instance} from './utils/axios';
import {createAsyncThunk} from '@reduxjs/toolkit';

export const GetPosts = createAsyncThunk('post/getposts')