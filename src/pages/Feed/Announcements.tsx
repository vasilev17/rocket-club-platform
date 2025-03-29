import Post from "../../components/custom/Post/Post";

function Announcements() {
  const posts = [
    {
      id: 2,
      title: "New Meeting Schedule",
      content: `Weekly meetings are now on Thursdays. Keep in mind to come on time since we have to leave earlier some weeks and the door will be locked at 14:00.
      Weekly meetings are now on Thursdays. Keep in mind to come on time since we have to leave earlier some weeks and the door will be loqweasdqweasdaeascked at 14:00.
      `,
      username: "ClubManager",
      likes: 18,
      comments: [
        {
          id: 1,
          username: "TeamMember",
          content: `Thanks for the update! I wont be able to attend tomorrow, will catch up next week! Good luck with the new protocols! I did some work yesterday,
          but will try to catch up next week so no need to worry!`,
        },
      ],
    },
    {
      id: 4,
      title: "Important Update",
      content: "New safety protocols in place",
      username: "SafetyOfficer",
      likes: 32,
      comments: [
        {
          id: 1,
          username: "NewMember",
          content: "Where can I find the full protocol document?",
        },
        {
          id: 2,
          username: "SafetyOfficer",
          content: "Check the pinned post in General section",
        },
      ],
    },
  ];

  return (
    <>
      {posts.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </>
  );
}

export default Announcements;
