import React from "react"
import { Heading4, Heading5, Paragraph } from "../typo"

import './post-card.scss'

const PostCard = ({userIcon, name, postDate, desc}:any) => {
    return (
        <React.Fragment>
            <div className="post-card">
                <div className="d-grid gap-3">
                    <div className="d-flex align-items-center gap-3">
                        <div className="user-icon">
                            <img src={userIcon} alt="icon" />
                        </div>
                        <div>
                            <Heading4>{name}</Heading4>
                            <Heading5>{postDate}</Heading5>
                        </div>
                    </div>
                    <Paragraph>
                        {desc}
                    </Paragraph>
                </div>
            </div>
        </React.Fragment>
    )
}

export default PostCard