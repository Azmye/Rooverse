import FormNewIssue from '../../components/FormNewIssue';
import IssuesThumbs from '../../components/IssuesThumbs';
import { auth } from '../../config/firebase';
import userState from '../../config/UserState';
const Home = () => {
  const users = userState((state) => state.users);
  console.log(users);
  return (
    <div className="py-16">
      <section id="new-issue" className="mb-5">
        <div className="px-4">
          <FormNewIssue />
        </div>
      </section>

      <section id="issues">
        <div className="px-4 flex flex-col gap-5">
          <IssuesThumbs />
          <IssuesThumbs />
          <IssuesThumbs />
          <IssuesThumbs />
        </div>
      </section>
    </div>
  );
};

export default Home;
