package com.kiet.config;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.security.Keys;
import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.AuthorityUtils;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.filter.OncePerRequestFilter;

import javax.crypto.SecretKey;
import java.io.IOException;
import java.util.List;


public class JwtTokenValidator extends OncePerRequestFilter {

    //Validates the JWT token from the request header and sets the authentication in the security context
    @Override
    protected void doFilterInternal(HttpServletRequest request,
                                    HttpServletResponse response, FilterChain filterChain)
            throws SecurityException, IOException, ServletException {

    String jwt = request.getHeader(JwtConstant.JWT_HEADER);
    //Check if the token exists in the request
    if(jwt!=null){
        jwt=jwt.substring(7);
        try{
            SecretKey key = Keys.hmacShaKeyFor(JwtConstant.SECRET_KEY.getBytes());
            Claims claims = Jwts.parserBuilder().setSigningKey(key).build().parseClaimsJws(jwt).getBody();
            String email = String.valueOf(claims.get("email"));
            String authorities = String.valueOf((claims.get("authorities")));
            //Convert roles into a list of GrantedAuthority
            List<GrantedAuthority> auth = AuthorityUtils.commaSeparatedStringToAuthorityList(authorities);
            Authentication authentication = new UsernamePasswordAuthenticationToken(email,null,auth);
            SecurityContextHolder.getContext().setAuthentication(authentication);
        }
        catch (Exception e){
            throw new BadCredentialsException("invalid token......");
        }
    }
        filterChain.doFilter(request,response);

    }
}
