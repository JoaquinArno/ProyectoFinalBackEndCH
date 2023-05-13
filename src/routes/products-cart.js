import compression from 'compression';
import { Router } from 'express';
import { authController } from "../controllers/index.js";
import { cartController } from '../controllers/cart.controller.js';


const router = Router()

router.route('/admin').get(authController.getLoginAdmin)

router.route('/productos').get(cartController.findCartByFilter)

router.route('/productos/id/:id').get(cartController.productDescription)

router.route('/productos/:category').get(cartController.findProductsByCategory)

router.route('/chat').get(authController.chatUsers)

router.route('/chat/:email').get(authController.findChatByMail)

router.route("/cart/:productId").post(cartController.updateCart).delete(cartController.deleteProductInCart);

router.route("/cart/finish/:cartId").post(cartController.finish)

router.get("/info", compression(), authController.info)

router.get("/info-uncomp", authController.info)

router.get("/api/random", authController.getRandom)


export const productsCartRouter = router;