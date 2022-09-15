import React from 'react';
import Image from 'next/image';

const ProfileBio = (props:any) => {
  return (
    <div className='row'>
      <div className='col-md-4 col-sm-12'>
        <div className='profile-wrapper'>
          <div className=''>
            {props.profileData.img &&
              <Image src={props.profileData.img} width="100%" height="100%" />
            }
          </div>
          <div className=''>
            {/* title/status */}
            <div>Verified Creator</div>

            {/* name */}
            <div>
              <label>{props.profileData.full_name}</label>
            </div>

            {/* following/followers */}
            <div className='row'>
              <div className='col'>
                <div>Following</div>
                <div>{props.profileData.following}</div>
              </div>
              <div className='col'>
                <div>Followers</div>
                <div>{props.profileData.followers}</div>
              </div>
            </div>

          </div>
        </div>
      </div>

      <div className='col-md-8 col-sm-12'>
        <div className='bio my-4'>
          <label>
            {props.profileData.bio}
          </label>
        </div>
      </div>

      <div>
        <button className='btn btn-follow w-100'>
          Follow
        </button>
      </div>
    </div>
  )
}

export default ProfileBio;