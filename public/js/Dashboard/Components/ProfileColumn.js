import React from 'react'

export default () => (
    <div className="profile-column">
        <div className="profile-photo">
            <img src="/images/placeholder.png" style={{width: '35vh'}} />
        </div>
        <form className="profile-edit">
            <h3>
                My Profile
            </h3>
            <input className="profile-info" id="name" defaultValue={`${user.fname} ${user.lname}`}/>
            <input className="profile-info" id="mobile" defaultValue="+91-8000007505" />
            <input className="profile-info" id="profile-email" defaultValue={user.email} />
            <button type="submit" className="saveEdits">Update</button>
        </form>
    </div>
)