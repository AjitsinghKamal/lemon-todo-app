/** @jsxImportSource @emotion/react */
import { jsx, css } from '@emotion/react';
import { ReactComponent as WelcomeSvg } from 'assets/illustrations/landing.svg';
import { LoginLayout } from 'layouts';
import LoginContainer from 'modules/login/Login';

export default function Login() {
	return (
		<LoginLayout>
			<div
				css={css`
					display: grid;
					grid-template-columns: 1fr 0.8fr;
					height: 100%;
				`}
			>
				<main
					css={css`
						display: flex;
						align-items: center;
						justify-content: center;
						padding: 0 var(--s-32);
					`}
				>
					<LoginContainer />
				</main>
				<aside
					css={css`
						display: flex;
						align-items: center;
						position: relative;
					`}
				>
					<div
						css={css`
							height: 80%;
							width: 80%;
							color: var(--c-w80);
						`}
					>
						<h1
							css={css`
								margin-bottom: 0.3em;
							`}
						>
							Get Work Done
						</h1>
						<h3
							css={css`
								font-weight: 300;
								margin-top: 0;
							`}
						>
							A Minimalist approach to your Todo Lists.
						</h3>
						<WelcomeSvg
							css={css`
								position: absolute;
								width: 80vh;
								height: auto;
								left: 50%;
								transform: translate(-40%, 15%);
								bottom: -50px;
							`}
						/>
					</div>
				</aside>
			</div>
		</LoginLayout>
	);
}
