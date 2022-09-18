import React from 'react';
import Image from 'next/image';

const ProfileBio = (props: any) => {
  return (
    <div className='row'>
      <div className='col-md-4 col-sm-12'>
        <div className='profile-wrapper'>
          <div>
            {props.profileData.img &&
              <Image src={props.profileData.img} width="100%" height="100%" />
            }
          </div>
          <div>
            {/* title/status */}
            <div><label className='fs-11 fw-light'>Verified Creator</label></div>

            {/* name */}
            <div>
              <label className='fs-16 fw-bold-900'>{props.profileData.full_name}</label>
            </div>

            {/* following/followers */}
            <div className='row mt-2'>
              <div className='col'>
                <div>
                  <label className='fs-11 fw-light'>Following</label>
                  <br />
                  <label className='fs-16 fw-bold-900'>{props.profileData.following}</label>
                </div>
              </div>
              <div className='col'>
                <div>
                  <label className='fs-11 fw-light'>Followers</label>
                  <br />
                  <label className='fs-16 fw-bold-900'>{props.profileData.followers}</label>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      <div className='col-md-8 col-sm-12'>
        <div className='bio mb-4 mt-md-0 mt-sm-4'>
          <label>
            {props.profileData.bio}
          </label>
        </div>
      </div>

      <div className='mt-md-3'>
        <button className='btn btn-follow w-100'>
          Follow
        </button>
      </div>
    </div>
  )
}

export default ProfileBio;