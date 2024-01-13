import { jwtDecode } from "jwt-decode";

export type JWTType = { exp: number, aud: string, jti: string };

// const token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiJTZEtyc0M3b2hzT1VKSG1vR2NkalVtam80NFVhOWh4cmlpWktPejBMNzlTTlBzYjd0aSIsImp0aSI6IjEwNWNjMmE2ZDZiYTVhMzM2YWMzNjRkZTVkMTA3N2Y2YmI4YzI0NmVhY2I4MjJiNzQ1MzhmNWQ1NzU3N2VjOWE3M2MzMDE0YjE4ZWRmN2RiIiwiaWF0IjoxNzAyNzYyNTMwLCJuYmYiOjE3MDI3NjI1MzAsImV4cCI6MTcwMjc2NjEzMCwic3ViIjoiIiwic2NvcGVzIjpbXX0.VR5sml6lB8jfZChuB_F_a2nmi_5uE9doEwezRfDBEO77KTVJ-wv3t99MeuRC-CUml2XvE7alUMU6OS5cTDLIgeYnjINX9JbrElSLvl44ubMS_f7o9T9-za1a5cSNsnVZIPZlRrdJRnoADBUJK0Ii3CXPtEzeoghGgqCGpX-PB3p04VOV-jmGlvaAuE_QO-1p3it8CyllTNOiR82L0HvO16Z4bqnZBMnnTsXy8cQaDZE_sHVq-qaiHl8byDjfBtEFEJo7g_LpXfMIeaImLNfduaueFKbT9_GA7EKsFPjyabZcnd36spvesuZfYzF86eXIZaTZj33aYzZXZPcR6dE8mg'
// const decoded = jwtDecode<JWTType>(token);


export function decodeToken(token: string): JWTType {
    return jwtDecode<JWTType>(token);
}

//decode access token 