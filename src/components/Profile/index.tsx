/* eslint-disable camelcase */
import {
  ImageContainer,
  ProfileContainer,
  ProfileContent,
  ProfileInfo,
  ProfileText,
  ProfileTitle,
} from './styles'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faBuilding,
  faUserGroup,
  faCode,
  faArrowUpRightFromSquare,
} from '@fortawesome/free-solid-svg-icons'
import { api } from '../../lib/axios'
import { useEffect, useState } from 'react'

interface ProfileData {
  login: string
  name: string
  bio: string
  avatarUrl: string
  htmlUrl: string
  company: string
  followers: string
}

export function Profile() {
  const [profileData, setProfileData] = useState<ProfileData>()

  async function fetchProfileData() {
    const response = await api.get('/users/Vinicius-PR')
    const { login, name, bio, avatar_url, html_url, company, followers } =
      response.data

    const profile = {
      login,
      name,
      bio,
      avatarUrl: avatar_url,
      htmlUrl: html_url,
      company,
      followers,
    }

    setProfileData(profile)
  }

  useEffect(() => {
    fetchProfileData()
  }, [])

  return (
    <ProfileContainer>
      <ImageContainer>
        <img src={profileData?.avatarUrl} alt="" />
      </ImageContainer>

      <ProfileContent>
        <ProfileTitle>
          <h1>{profileData?.name}</h1>
          <a href={profileData?.htmlUrl} target="_blank" rel="noreferrer">
            GITHUB
            <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
          </a>
        </ProfileTitle>

        <ProfileText>{profileData?.bio}</ProfileText>

        <ProfileInfo>
          <div>
            <FontAwesomeIcon icon={faCode} />
            <p>{profileData?.login}</p>
          </div>

          <div>
            <FontAwesomeIcon icon={faBuilding} />
            <p>{profileData?.company}</p>
          </div>

          <div>
            <FontAwesomeIcon icon={faUserGroup} />
            <p>{profileData?.followers} Seguidores</p>
          </div>
        </ProfileInfo>
      </ProfileContent>
    </ProfileContainer>
  )
}
