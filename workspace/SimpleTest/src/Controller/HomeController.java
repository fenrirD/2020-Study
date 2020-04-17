package Controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HomeController {
	
	@RequestMapping("/his.do")
	public void test() {
		System.out.println("hi");
	}
	
	@GetMapping("/hisd.do")
	public void test2() {
		System.out.println("hi");
	}
	
	
}
