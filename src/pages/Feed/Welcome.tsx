import Post from '../../components/custom/Post/Post';

function Welcome() {
  const posts = [
    { 
      id: 1, 
      title: 'WELCOME TO THE CLUB Ivan Velichkov!', 
      content: 'This is the members area of the platform. Here you can see recent activity posts!',
      username: 'RocketAdmin',
      likes: 15,
      comments: [
        { id: 1, username: 'JohnDoe', content: 'Great to be here!' }
      ]
    },
    { 
      id: 6, 
      title: 'WELCOME TO THE CLUB Nikolai Petkov!', 
      content: 'This is the members area of the platform. Here you can see recent activity posts!',
      username: 'ModTeam',
      likes: 8,
      comments: []
    }
  ];

  return (
    <>
      {posts.map(post => (
        <Post key={post.id} post={post} />
      ))}
    </>
  );
}

export default Welcome;
