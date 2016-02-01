package com.sunilprakash.wapp.web.rest;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

import org.slf4j.LoggerFactory;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import ch.qos.logback.classic.LoggerContext;

import com.sunilprakash.wapp.web.rest.dto.LoggerDTO;

@RestController
public class CommonResource {

    @RequestMapping(value = "/error",
            method = RequestMethod.GET,
            produces = MediaType.APPLICATION_JSON_VALUE)
        public Map<String,String> getList() {
            Map<String,String> map = new HashMap<String, String>();
            map.put("error", "500 server error");
            return map;
        }

}
