package com.example.demo;

import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.rsocket.RSocketRequester;
import org.springframework.messaging.rsocket.annotation.ConnectMapping;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Controller;

import java.util.HashMap;

@Controller
public class RsocketController {

    private RSocketRequester requester;

    @ConnectMapping
    public void handleMessage(RSocketRequester requester) {
        System.out.println("connected");
        this.requester = requester;
        requester.rsocketClient().source().doOnError(Throwable::printStackTrace).subscribe(r -> r.onClose().doFinally(v -> {
            System.out.println("closed");
            this.requester = null;
        }).subscribe());
    }

    @MessageMapping("hello")
    public String hello(String mess) {
        System.out.println(mess.length());
        return "{\"de\": 33}";
    }
}
