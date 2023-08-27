//icons
import {
	ImTwitter,
	ImFacebook,
	ImPinterest,
	ImYoutube,
	ImInstagram,
} from "react-icons/im";

function Socials() {
	return (
		<div className="hidden xl:flex ml-24">
			<ul className="flex gap-x-4">
				<li>
					<a href="#">
						<ImTwitter />
					</a>
				</li>
				<li>
					<a href="#">
						<ImFacebook />
					</a>
				</li>
				<li>
					<a href="#">
						<ImPinterest />
					</a>
				</li>
				<li>
					<a href="#">
						<ImYoutube />
					</a>
				</li>
				<li>
					<a href="#">
						<ImInstagram />
					</a>
				</li>
			</ul>
		</div>
	);
}

export default Socials;
