import BackArrow from "./BackArrow";
import axios from 'axios';
import m from 'mithril';

function MobileBar(show = true) {
    let userData = {
        username: '...Loading',
        rank: '..Loading',
        profilePicFilename: '',
        ID: '',
        elo: ''
    };

    axios.get('http://localhost:44251/api/current_user', {
        withCredentials: true // Important for including session cookies
    })
        .then(response => {
            const data = response.data;
            console.log("data" + data.user);
            if (data.user) {
                userData = {
                    username: data.user.username,
                    rank: data.user.rank,
                    profilePicFilename: data.user.profilePicture,
                    ID: data.user._id,
                    elo: data.user.elo
                };

                m.redraw();
                // Update state or context with user data
            } else {
                console.error('User not authenticated');
                // Handle not authenticated case
            }
        })
        .catch(error => {
            console.error('Error:', error);
        });

    return {
        view: () => (
            <div className="text-white flex flex-row justify-between mx-4">
                <div>
                    <BackArrow />
                </div>
                <div>
                    <div className="flex flex-row profileNavbar mb-2 mt-2">
                        <div className="flex flex-col profileNavbar">
                            <div className="flex justify-center">
                                <div>{userData.username}</div>
                            </div>
                            <div className="rank">{userData.rank}</div>
                        </div>
                        <div className="flex items-center">
                            <img className="img rounded" src={userData.profilePicFilename} />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default MobileBar;