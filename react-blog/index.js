const h = React.createElement;
const initialPosts = [
    {
        "userId": 1,
        "id": 1,
        "title": "Post1",
        "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
      },
      {
        "userId": 1,
        "id": 2,
        "title": "Post2",
        "body": "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
      },
      {
        "userId": 1,
        "id": 3,
        "title": "Post3",
        "body": "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut"
      },
      {
        "userId": 1,
        "id": 4,
        "title": "Post4",
        "body": "ullam et saepe reiciendis voluptatem adipisci\nsit amet autem assumenda provident rerum culpa\nquis hic commodi nesciunt rem tenetur doloremque ipsam iure\nquis sunt voluptatem rerum illo velit"
      },
      {
        "userId": 1,
        "id": 5,
        "title": "Post5",
        "body": "repudiandae veniam quaerat sunt sed\nalias aut fugiat sit autem sed est\nvoluptatem omnis possimus esse voluptatibus quis\nest aut tenetur dolor neque"
      },
      {
        "userId": 1,
        "id": 6,
        "title": "Post6",
        "body": "ut aspernatur corporis harum nihil quis provident sequi\nmollitia nobis aliquid molestiae\nperspiciatis et ea nemo ab reprehenderit accusantium quas\nvoluptate dolores velit et doloremque molestiae"
      },
      {
        "userId": 1,
        "id": 7,
        "title": "Post7",
        "body": "dolore placeat quibusdam ea quo vitae\nmagni quis enim qui quis quo nemo aut saepe\nquidem repellat excepturi ut quia\nsunt ut sequi eos ea sed quas"
      },
      {
        "userId": 1,
        "id": 8,
        "title": "Post8",
        "body": "dignissimos aperiam dolorem qui eum\nfacilis quibusdam animi sint suscipit qui sint possimus cum\nquaerat magni maiores excepturi\nipsam ut commodi dolor voluptatum modi aut vitae"
      },
      {
        "userId": 1,
        "id": 9,
        "title": "Post9",
        "body": "consectetur animi nesciunt iure dolore\nenim quia ad\nveniam autem ut quam aut nobis\net est aut quod aut provident voluptas autem voluptas"
      }
];

let RemovePostButton = (props) => {
  return h('button', {
    onClick: () => {
      props.removePost(props.post);
    }
  }, 'Remove Post')
};

let SnakeifyButton = (props) => {
  return h('button', {
    onClick: () => {
      props.snakeify(props.post);
    } 
  }, 'Snakefiy')
};

let PageHeader = (props) => 
  h('h1', {className: 'big-header'}, ['React Blog'])

let BlogRow = (props) =>  
  h('li', {}, [
    h('h2', {}, props.post.title),
    h(RemovePostButton, props),
    h(SnakeifyButton, props),
    h('p', {}, props.post.body)
  ])

let BlogList = (props) => 
  h('ul', {}, 
    props.posts.map(post => 
      h(BlogRow, {
        post: post,
        removePost: props.removePost,
        snakeify: props.snakeify
      })
    )
  )

let PageFooter = (props) => 
  h('footer', {}, [
    h('p', {}, ['Copyright 2018']),
    h('a', {href: 'mypage.com'}, ['My Website'])
  ])

class BlogPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        posts: initialPosts
    }
  };

  render() {
    let removePost = (postToRemove) => {
      this.setState({
        posts: this.state.posts.filter(post => post.id !== postToRemove.id)
      })
    };

    let snakeify = (blogPost) => {
      this.setState({
        posts: this.state.posts.map(post => 
          post.id === blogPost.id ? 
            Object.assign({...post, title: post.title + 's'})
          :
            post
        )
      })
    };

    return h('div', {}, [
      h(PageHeader),
      h(BlogList, {
        posts: this.state.posts,
        removePost: removePost,
        snakeify: snakeify
      }),
      h(PageFooter)
    ])
  };
};
  
ReactDOM.render(h(BlogPage), document.querySelector('.react-root'));