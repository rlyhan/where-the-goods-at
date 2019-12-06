
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('items').del()
    .then(function () {
      // Inserts seed entries
      return knex('items').insert([

        {id: 1, item_name: 'Coriander', user_id: 1, category_id: 1, img_url: 'http://source.unsplash.com/500x500/?funny-horse', public: false, description: 'Some funny animals', lat: -41.296889, long: 174.7719502, rating: 5, comments: 'Some nice stuff going on in here', season: 'all year long', quantity: '1000000'},
        {id: 2, item_name: 'Lemons', user_id: 1, category_id: 1, img_url: 'http://source.unsplash.com/500x500/?funny-horse', public: true, description: 'Some funny animals', lat: -41.296990, long: 174.7719502, rating: 5, comments: 'Some nice stuff going on in here', season: 'all year long', quantity: '1000000'},
        {id: 3, item_name: 'Apples', user_id: 1, category_id: 1, img_url: 'http://source.unsplash.com/500x500/?funny-horse', public: true, description: 'Some funny animals', lat: -41.296773, long: 174.7719502, rating: 5, comments: 'Some nice stuff going on in here', season: 'all year long', quantity: '1000000'},
        {id: 4, item_name: 'Elder', user_id: 1, category_id: 1, img_url: 'https://cdn1.bigcommerce.com/n-ww20x/rgdg1pz/products/1708/images/4292/P1016160ELDER__12383.1497781668.1280.1280.jpg?c=2', public: true, description: 'Hard to reach, I reccomend bringing some long handled clippers and a net', lat: -41.322432, long: 174.786959, rating: 5, comments: 'S', season: 'November/December for flowers, a bit later for berries', quantity: '10'},
        {id: 5, item_name: 'Blackberries', user_id: 1, category_id: 1, img_url: 'https://i.pinimg.com/600x315/58/96/2e/58962ed7f25def4add14b87c42cd8b6e.jpg', public: true, description: 'There are heaps along this pathway', lat: -41.323922, long: 174.782543, rating: 5, comments: 'S', season: 'Feburary', quantity: '100'},
        {id: 6, item_name: 'Elder', user_id: 1, category_id: 1, img_url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYSB2RsJ7d20JIyCQ1YlrLzeVprqE1-1aLJP8Qy7xTvhk7PvdU&s', public: true, description: 'Down the hill behind the bus shelter', lat: -41.321377, long: 174.786454, rating: 5, comments: 'S', season: 'November/December for flowers, a bit later for berries', quantity: '10'},
        {id: 7, item_name: 'Elder', user_id: 1, category_id: 1, img_url: 'http://www.jonsbushcraft.com/images/elderflower/elderflower.jpg?w=1400', public: true, description: 'Made some delicious elderflower cordial with these, great spot', lat: -41.318935, long: 174.781540, rating: 5, comments: 'S', season: 'November/December for flowers, a bit later for berries', quantity: '12'},
        {id: 8, item_name: 'Fig', user_id: 1, category_id: 1, img_url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQos6c9bksyQvzEOEVdYj2W1NvOwYfPSFbhvOeEcNeX0wHCBd-N&s', public: true, description: 'Lots of trees on the side of the road, yum!', lat: -41.331538, long: 174.772763, rating: 5, comments: 'S', season: 'summer', quantity: '20'},
        {id: 9, item_name: 'Community Garden', user_id: 1, category_id: 1, img_url: 'https://d1k2jfc4wnfimc.cloudfront.net/assets/decor/generalpresentation/id12761pic2.jpg?ts=131417904868855244', public: true, description: 'Down the alley at the end of the street, very cute. A variety of items growing', lat: -41.319374, long: 174.773226, rating: 5, comments: 'S', season: 'Any time!', quantity: '7'},
        {id: 10, item_name: 'Community garden', user_id: 1, category_id: 1, img_url: 'https://www.greenelephant.co.nz/wp-content/uploads/2017/10/Our-organic-vegetable-garden-crops.jpg', public: true, description: 'Small ish guerrilla garden down the end of the street, along a walkway to the park', lat: -41.318714, long: 174.774091, rating: 5, comments: 'S', season: 'Any time', quantity: '10'},
        {id: 11, item_name: 'Apples!', user_id: 1, category_id: 1, img_url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUeJFUIVnoi9Ep8cuFNJbC9vUqKOL0_99noFutNNXIavFvZZJNfg&s', public: true, description: 'There are a couple of delicious apple trees on this street, small but abundant', lat: -41.337638, long: 174.768730, rating: 5, comments: 'S', season: 'summer', quantity: '10'},
        {id: 12, item_name: 'Kawakawa Commons', user_id: 1, category_id: 1, img_url: '', public: true, description: 'Beutiful community garden. Small veggie patch, great bush walks with different foraging options such as fruit trees and of course kawakawa', lat: -41.329784, long: 174.785861, rating: 5, comments: 'S', season: 'Any time', quantity: '10'},

        {id: 13, item_name: 'Pears', user_id: 1, category_id: 1, img_url: 'https://www.podgardening.co.nz/img/products/fruit/Pear/Pear/pear-bunch-kel.jpg', public: true, description: 'Hanging over the fence', lat: -41.337884, long: 174.770409, rating: 5, comments: 'S', season: 'Summer time', quantity: '10'},

        {id: 14, item_name: 'Elder', user_id: 1, category_id: 1, img_url: 'https://i.pinimg.com/originals/10/52/c3/1052c3ef9116a412bfa1c4700df4fa30.jpg', public: true, description: 'On the bank between the road and houses, a big tree', lat: -41.323915, long: 174.789056, rating: 5, comments: 'S', season: 'November/December for flowers, a bit later for berries', quantity: '10'},
      ]);
    });
};

-41.337884, 174.770409