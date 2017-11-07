const uuid = require('uuid')
const fs = require('fs')
const rand = (max = 255, min = 50) => {
  return Math.floor(Math.random() * (max - min) + min)
}
const randColor = () => {
  return `rgb(${rand()},${rand()},${rand()})`
}
const lorem = `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aspernatur ut culpa, exercitationem expedita minus ipsa fuga natus, autem similique incidunt aliquid. Amet dicta tempora veniam, saepe aliquid provident. Nulla, odit!
Doloremque, suscipit placeat veritatis corporis iusto, porro rem, facere iste expedita repudiandae aliquam. Incidunt quis explicabo assumenda voluptatum culpa obcaecati maxime. Saepe deleniti, corrupti sint ratione autem itaque voluptate suscipit.
Nihil officiis maiores ad possimus, exercitationem doloribus non facere, recusandae odit eligendi rerum eveniet optio sunt ipsa accusantium accusamus rem temporibus quaerat repudiandae, deserunt placeat dicta necessitatibus! Nesciunt, quam tempore.`
const titles = [
  "From Around the Web: 20 Awesome Photos of Javascript",
  "Is Tech Making Javascript Better or Worse?",
  "3 Common Reasons Why Your Javascript Isn't Working",
  "What Hollywood Can Teach Us About Javascript",
  "14 Businesses Doing a Great Job at Javascript",
  "How Did We Get Here?",
  "11 Creative Ways to Write About Javascript",
  "Miley Cyrus and Javascript",
  "How to Solve Issues With Javascript",
  "20 Insightful Quotes About Javascript"
]
// http://lorempixel.com/1280/720/
function Post() {
  this.title = titles[rand(titles.length - 1,1)]
  this.sections = [
    {
      subtitle: 'first subtitle', 
      content: lorem
    },
    {
      subtitle: 'sec subtitle', 
      content: lorem
    },
  ]
  this.tags = ['dev', 'fun', 'little kids']
  this.color = randColor()
  this.img = `/images/ph${rand(4,1)}.jpeg`
  this.id = uuid.v4()
}
const posts = []
for (let i = 0; i < 10; i++) {
  posts.push(new Post())
}
fs.writeFile('./data/posts.json', JSON.stringify(posts),(err) => {
  if(err) throw new Error(err)
})