import Spinner from './images/spinner.gif';
import "./styles/loading.css";

const Loading = () => {
	return(
		<div className="Loading">
            <div className="loading-container">
                <div className="loading-text">
                    <div>잠시만 기다려 주세요</div>
                    <img src={Spinner} alt="spinner가 돌아간다" width="50%" />
                    <div>처리 중입니다...</div>
                </div>
            </div>
		</div>
	);
 
}

export default Loading;
