import {
  ImageContainer,
  ProfileContainer,
  ProfileContent,
  ProfileInfo,
  ProfileText,
  ProfileTitle,
} from './styles'
import AvatarImg from '../../assets/avatar.png'
// import viniciusImg from '../../assets/vinicius.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faBuilding,
  faUserGroup,
  faCode,
  faArrowUpRightFromSquare,
} from '@fortawesome/free-solid-svg-icons'
export function Profile() {
  return (
    <ProfileContainer>
      <ImageContainer>
        <img src={AvatarImg} alt="" />
      </ImageContainer>

      <ProfileContent>
        <ProfileTitle>
          <h1>Camerom Wiliamson</h1>
          <a href="" target="_blank">
            GITHUB
            <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
          </a>
        </ProfileTitle>

        <ProfileText>
          Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu
          viverra massa quam dignissim aenean malesuada suscipit. Nunc, volutpat
          pulvinar vel mass.
        </ProfileText>

        <ProfileInfo>
          <div>
            <FontAwesomeIcon icon={faCode} />
            <p>cameronwll</p>
          </div>

          <div>
            <FontAwesomeIcon icon={faBuilding} />
            <p>RocketSeat</p>
          </div>

          <div>
            <FontAwesomeIcon icon={faUserGroup} />
            <p>32 Seguidores</p>
          </div>
        </ProfileInfo>
      </ProfileContent>
    </ProfileContainer>
  )
}
