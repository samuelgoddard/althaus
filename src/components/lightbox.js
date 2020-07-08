import React, { useState } from 'react'
import FsLightbox from 'fslightbox-react'
export default function Lightbox({videoId, thumbnail, videoTitle}) {
	const [toggler, setToggler] = useState(false);
	return (
		<div>
			<a href={"https://www.youtube.com/embed/" + videoId } onClick={ e => e.preventDefault() + setToggler(!toggler) }>
			{thumbnail}
			</a>
			<FsLightbox
				toggler={ toggler }
				key={ videoId }
				customSources={[
					<iframe
						title={videoTitle}
						src={"https://www.youtube.com/embed/" + videoId }
						width="1920px"
						height="1080px"
            frameBorder="0"
            autoPlay
						allow="autoplay; fullscreen"
						allowFullScreen />
				]}
			/>
		</div>
	);
}