function SkillItem(props) {
  return (
    <div className="tech-item">
      <img src={props.icon} alt="tech-logo" className="icons" />
      <div>{props.name}</div>
    </div>
  )
}
export default SkillItem;