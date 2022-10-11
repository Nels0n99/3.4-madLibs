var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {
    defaultnoun1: "vineyard",
    defaultverb1: "jumped",
    defaultadjective1: "round",
    defaultnoun2: "grapes",
    defaultverb2: "reach",
    defaultadjective2: "high"
  });
});

/*POST form data*/
router.post('/story', function(req, res){
  let body = req.body;
  let newStory = getStory(body);
  res.render('story', {
    newStory: newStory
  });
})

module.exports = router;







function getStory(formData) {
  if (formData.storyChoice === "1"){
    return generateStory1(formData);
  } else if (formData.storyChoice === "2"){
    return generateStory2(formData);
  } else if (formData.storyChoice === "3"){
    return generateStory3(formData);
  } else if (formData.storyChoice === "4"){
    return generateRandomStory(formData);
  } else {
    return "invalid";
  }
}

function generateStory1(formData){
  return `Once there was a hungry fox who stumbled upon a ${formData.noun1}. After seeing the ${formData.adjective1}, juicy ${formData.noun2} hanging in a bunch, the fox drooled. But no matter how ${formData.adjective2} he ${formData.verb1}, he couldn’t ${formData.verb2} for it. So he told himself that it was probably sour and left. That night, he had to sleep on an empty stomach.`
}

function generateStory2(formData){
  return `After ${formData.verb1} a long distance, a ${formData.adjective1} crow was wandering the ${formData.noun1} in search of water. Finally, he saw a ${formData.noun2} half-filled with water. He tried to drink from it but his beak wasn’t ${formData.adjective2} enough to reach the water inside. He then saw pebbles on the ground and one by one, he put them in the pot until the water rose to the brim. The crow then hastily ${formData.verb2} from it and quenched his thirst.`
}

function generateStory3(formData){
  return `There was a ${formData.noun1} named John who was so ${formData.adjective1}, he couldn’t even bother to change his clothes. One day, he saw that the ${formData.noun2} tree in their yard was full of fruits. He wanted to ${formData.verb1} some apples but he was too ${formData.adjective2} to ${formData.verb2} the tree and take the fruits. So he lay down underneath the tree and waited for the fruits to fall off. John waited and waited until he was very hungry but the apples never fell.!`
}

function generateRandomStory(formData){
  let choice = (Math.floor(Math.random() * 3 + 1)).toString()
  if (choice === "1"){
    return generateStory1(formData);
  } else if (choice === "2"){
    return generateStory2(formData);
  } else if (choice === "3"){
    return generateStory3(formData);
  }
  return choice
}

