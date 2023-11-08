import { reactive } from "vue";
import productsJSON from '../db.json';

export const store = reactive({
    products: productsJSON.products     
})