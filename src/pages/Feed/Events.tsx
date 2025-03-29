import Post from '../../components/custom/Post/Post';

function Events() {
  const posts = [
    { 
      id: 3, 
      title: 'Rocket Launch Day', 
      content: 'Join us this weekend for a launch!',
      username: 'EventCoordinator',
      likes: 25,
      comments: [
        { id: 1, username: 'RocketFan', content: 'Can\'t wait!' },
        { id: 2, username: 'SpaceEnthusiast', content: 'What time does it start?' }
      ]
    },
    { 
      id: 5, 
      title: 'Workshop Event', 
      content: 'Learn about rocket propulsion systems',
      username: 'TechLead',
      likes: 12,
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

export default Events;
