import express from 'express';

import { deleteUser, getAllUser, updateUser } from '../controllers/users';
import { isAuthenticated, isOwner } from '../middleware';

export default(router:express.Router)=>{
    router.get('/users',isAuthenticated, getAllUser);
    router.delete('/users/:id',isOwner,isAuthenticated, deleteUser);
    router.patch('/users/:id', isOwner, updateUser);
}