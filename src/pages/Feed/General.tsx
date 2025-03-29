import Post from '../../components/custom/Post/Post';

function General() {
  const posts = [
    { 
      id: 1, 
      title: 'Welcome to Rocket Club', 
      content: 'This is our new platform!',
      username: 'RocketAdmin',
      likes: 15,
      comments: [
        { id: 1, username: 'JohnDoe', content: 'Great to be here!' }
      ]
    },
    { 
      id: 6, 
      title: 'Community Guidelines', 
      content: 'Please read our community guidelines',
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

export default General;
