class RainDataAPI{constructor(t){this.baseURL=t}async#t(t,e={}){const r=`${this.baseURL}${t}`,n=await fetch(r,e),a=await n.json();if(a.error)throw new Error(a.error||'An error occurred');return a}async getSchools(){return this.#t('/get-schools',{headers:{'ngrok-skip-browser-warning':'true'}})}async searchRainDataRange(t,e){return this.#t('/search-rain-data-range',{method:'POST',headers:{'Content-Type':'application/json','ngrok-skip-browser-warning':'true'},body:JSON.stringify({start_date:t,end_date:e})})}async login(t,e){const{token:r}=await this.#t('/login',{method:'POST',headers:{'Content-Type':'application/json','ngrok-skip-browser-warning':'true'},body:JSON.stringify({username:t,password:e})});this.token=r}async logout(){await this.#t('/logout',{method:'POST',headers:{Token:this.token,'ngrok-skip-browser-warning':'true'}}),this.token=null}async getAllowedSchools(){return this.#t('/get-allowed-schools',{headers:{Token:this.token,'ngrok-skip-browser-warning':'true'}})}async setRainData(t,e,r,n){return this.#t('/set-rain-data',{method:'POST',headers:{'Content-Type':'application/json',Token:this.token,'ngrok-skip-browser-warning':'true'},body:JSON.stringify({school:t,date:e,amount:r,note:n})})}async clearRainData(t,e){return this.setRainData(t,e,0,'')}}