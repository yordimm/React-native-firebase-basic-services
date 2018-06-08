import * as firebase from 'firebase';

const productsPath = '/products/';

 export default class Services {

    static createProduct(name = 'Mcbook pro 256 gb', price = '9269000', quantity = '15', brand = 'apple', category = 'technology') {
        return new Promise((resolve, reject) => {
            let productsData = {}
            productsData = {
                name: name,
                price: price,
                quantity: quantity,
                brand: brand,
                category: category
            }
            firebase.database().ref(productsPath).push(productsData).then(() => {
                resolve();
            }, err => {
                reject(err);
            });
        });
    }

    static getProducts() {
        return new Promise((resolve, reject) => {
            firebase.database().ref(productsPath).once('value', snapshot => {
                let productArray = [];
                if (snapshot.val()) {
                    productArray = this.buildArray(snapshot);
                }
                resolve(productArray);
            }, err => {
                reject(err);
            });
        });
    }

    //     static async updateLikes(placeId, like) {
    //         const likes = await firebase.database().ref(`${placesPath}${placeId}/`);
    //         likes.update({ like: like });
    //     }
    // /**
    //  * Permite acomodar los datos traidos de firebase en un objeto
    //  * @param {*} firebaseData 
    //  */
    static async buildArray(firebaseData) {
        const products = await firebaseData.val();
        return Object.keys(products).map((key) => {
            return { id: key, ...products[key] }
        })
    }


}
