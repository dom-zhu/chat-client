/* Handles routing for proj*/

import controller from './controller';
import * as express from 'express';
const router = express.Router();

// Routes

// communities routes
router.post('/newMessage', controller.newMessage);
router.get('/', (req, res) => {
  res.send('gg');
});
// router.post('/addCommunity', controller.addCommunity);
// router.post('/updateCommunity', communityController.updateCommunity);
// router.post('/newThread', communityController.makeThread);
// router.get('/getCommunities', communityController.getCommunities);
// router.get('/getCommunity/:name', communityController.getCommunity);

export default router;
